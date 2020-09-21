import React from "react";
import "./App.scss";
import MenuCollapsable from "./components/Menu-collapsable";
import imageTop from './assets/top.png';
import imageBottom from './assets/bot.png';

function App() {
    return (
        <div className="App">
            <MenuCollapsable
                startValue={true}
                top={imageTop}
                bottom={imageBottom}
                tabWidth={"400px"}
                backgroundColor={"none"}
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus pretium lorem ac nisl bibendum eleifend. Morbi
                    felis sapien, dapibus ac ornare non, auctor vitae augue.
                    Maecenas vulputate libero et imperdiet gravida. Aenean eu
                    volutpat turpis, at maximus ante. Nullam porttitor fermentum
                    eros in bibendum. Aliquam posuere facilisis quam, sit amet
                    rutrum velit porttitor feugiat. Ut ut arcu turpis. Sed
                    sagittis dictum magna vitae scelerisque. Sed interdum dictum
                    mi. Fusce a lorem auctor, tincidunt urna sit amet, tempus
                    ipsum. Fusce eros turpis, congue non mollis nec, ultricies
                    id libero. Morbi vel pharetra neque. Donec imperdiet, nunc
                    ac ornare congue, magna ex aliquam mi, vel tincidunt nulla
                    urna quis velit. Nam a sem vulputate, pellentesque nulla
                    vitae, elementum dolor. Donec interdum urna enim, a mattis
                    nunc tempor in. Aenean sollicitudin condimentum pulvinar.
                    Curabitur libero erat, bibendum ut nisi in, gravida ornare
                    neque. Praesent odio velit, mollis ac lacus at, venenatis
                    molestie erat. Vestibulum sed vehicula orci. Morbi nec
                    tincidunt diam. Cras odio dui, aliquet sed elementum ut,
                    malesuada sed libero. Aenean feugiat tempor turpis, sit amet
                    vestibulum eros ullamcorper a. Mauris consequat tincidunt
                    justo id posuere. Praesent in ante finibus, lacinia metus
                    vitae, faucibus enim. Ut eu posuere urna. Sed semper leo non
                    arcu maximus, eget dignissim nibh molestie. Vestibulum eu
                    ipsum dictum lorem dictum sodales. Etiam interdum dui
                    tellus, eu auctor enim laoreet sed. Sed id justo volutpat,
                    convallis ante nec, ullamcorper nunc. Integer a lacinia
                    ipsum. Fusce tempus sed nunc pharetra varius. Sed accumsan
                    augue id arcu porttitor ultricies. Quisque in malesuada
                    ante. Pellentesque id ex vehicula, lobortis dolor in, varius
                    odio. Pellentesque suscipit congue velit non porttitor.
                </p>
            </MenuCollapsable>
            <MenuCollapsable> Domyślne wartości</MenuCollapsable>
        </div>
    );
}

export default App;
