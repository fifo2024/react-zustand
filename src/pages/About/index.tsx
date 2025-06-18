// pages/About/index.tsx
import { useCounterStore, useFoodStore } from "~/stores";
import { BearBox } from "~/components/BearBox";
import { CatBox } from "~/components/CatBox";
import { CatBox2 } from "~/components/CatBox2";
import { CatController } from "~/components/CatController";
import { FoodBox } from "~/components/FoodBox";

const About = () => {
    const counter = useCounterStore((state) => state.counter);
    const fishCountUnsub = useFoodStore.subscribe(
        (state) => state.fish,
        (fish) => {
            console.log("fish counter change::", fish);
        }
    );

    return (
        <div>
            <div>About Page {counter}</div>
            <div className="container">
                <h1>Zustand 例子</h1>
                <div>
                    {/* 基本使用 */}
                    <CatBox />
                </div>

                <br />
                {/* ================================================================================================== */}

                <div>
                    <BearBox />
                    <FoodBox />
                    <br />
                </div>
                {/* ================================================================================================== */}
                <br />

                <div>
                    <CatBox2 />
                    <CatController />
                </div>
            </div>
        </div>
    );
};

export default About;
