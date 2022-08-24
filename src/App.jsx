import {
  faCss3Alt, faHtml5, faJava, faReact, faSquareJs, faUbuntu,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { faSearch, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback } from "react";
import Particles from "react-particles";
import {
  Animator,
  batch,
  Fade, Move,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky
} from "react-scroll-motion";
import { loadFull } from "tsparticles";

function App() {
  const FadeUp = batch(Fade(), Move(), Sticky());

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);


  const options = {
    preset: "snow",
    particles: {
      color: {
        value: "#fff",
      },
      move: {
        direction: "bottom",
        enable: true,
        outModes: "out",
        speed: 2,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 15,
      },
    },
  };

  return (
    <div className="bg-dark overflow-clip">
      <Particles options={options} init={particlesInit} />
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <div className="space-y-1 ">
              <h1 className=" text-white font-bold text-6xl">Hello there👋</h1>
              <p className=" text-white text-xl">
                ✨ I'm{" "}
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-red-600">
                  Dxqt
                </span>
                . I make very high-quality stuffs.
              </p>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <h2 className=" text-white font-medium text-5xl">I know some...</h2>
            <div className="mt-5 space-x-3">
              <FontAwesomeIcon
                className="text-orange-500"
                icon={faHtml5}
                size="5x"
              />
              <FontAwesomeIcon
                className="text-blue-700"
                icon={faCss3Alt}
                size="5x"
              />
              <FontAwesomeIcon
                className="text-orange-400"
                icon={faJava}
                size="5x"
              />
              <FontAwesomeIcon
                className="text-yellow-300"
                icon={faSquareJs}
                size="5x"
              />
              <FontAwesomeIcon
                className="text-blue-500"
                icon={faReact}
                size="5x"
              />
              <FontAwesomeIcon
                className="text-orange-600"
                icon={faUbuntu}
                size="5x"
              />
              <p className="mt-3 text-gray-400 text-xl">
                And I am non bingary straight alpha beta male. (real)
              </p>
              <p className="mt-3 text-gray-400 text-xl">
                I also think pasting codes is very{" "}
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-800">
                  haram
                </span>
                !
              </p>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <span className="text-white">
              <Animator animation={MoveIn(-1000, 0)}>
                <p className="font-bold text-4xl">
                  Some things you might not be interested in{" "}
                </p>
              </Animator>
              <div className=" text-2xl">
                <Animator animation={MoveIn(1000, 0)}>
                  <a
                    className="text-purple-500"
                    href="https://host.dxqt.lol"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="text-purple-400"
                      icon={faUpload}
                      size="sm"
                    />{" "}
                    host.dxqt.lol
                  </a>{" "}
                  | Private ShareX Uploader
                </Animator>
                <Animator animation={MoveOut(1000, 0)}>
                  <a
                    className="text-blue-500"
                    href="https://search.dxqt.lol"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="text-blue-400"
                      icon={faSearch}
                      size="sm"
                    />{" "}
                    search.dxqt.lol
                  </a>{" "}
                  | SearXNG Instance
                </Animator>
                <Animator animation={MoveOut(-1000, 0)}>
                  <a
                    className="text-red-500"
                    href="https://youtube.dxqt.lol"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="text-red-400"
                      icon={faYoutube}
                      size="sm"
                    />{" "}
                    youtube.dxqt.lol
                  </a>{" "}
                  | My Youtube Channel
                </Animator>
              </div>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <div className="text-white text-4xl">
              <h2 className="font-bold">Maybe that's all?</h2>
              <p>
                My discord tag and discriminator is:{" "}
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-200 to-blue-900">
                  dxqt#1111
                </span>
              </p>
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

export default App;
