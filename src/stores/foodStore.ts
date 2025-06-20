import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";

const initialFoodValue = {
    fish: 0,
    mouse: 0,
};

export const useFoodStore = create<typeof initialFoodValue>()(
    devtools(
        subscribeWithSelector(
            persist(() => initialFoodValue, { name: "food store" })
        ),
        { name: "food store" }
    )
);

// 鱼 ++
export const addOneFish = () =>
    useFoodStore.setState((state) => ({ fish: state.fish + 1 }));

// 鱼 --
export const removeOneFish = () =>
    useFoodStore.setState((state) => ({ fish: state.fish - 1 }));

// 移除所有的鱼
export const removeAllFish = () => useFoodStore.setState({ fish: 0 });

// 老鼠 ++
export const addOneMouse = () =>
    useFoodStore.setState((state) => ({ mouse: state.mouse + 1 }));
