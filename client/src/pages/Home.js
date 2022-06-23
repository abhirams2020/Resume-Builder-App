import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import templateimg from "../resources/templates/template1.png";
import template2img from "../resources/templates/template2.png";
import "../resources/templates.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const templates = [
    {
      title: "Template 1",
      image: templateimg,
    },
    {
      title: "Template 2",
      image: template2img,
    },
  ];
  return (
    <DefaultLayout>
      <div>
        <h4>
          &nbsp;&nbsp;Choose template
        </h4>
      </div>
      <div className="row home">
        {templates.map((template, index) => {
          return (
            <div className="col-md-4">
              <div className="template">
                <img
                  src={template.image}
                  height="400"
                  alt=""
                  style={{ width: "100%" }}
                />
                <div className="text">
                  <p>{template.title}</p>
                  <button onClick={() => navigate(`/templates/${index + 1}`)}>
                    USE
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h5>
          &nbsp;&nbsp;Note : Edit details in user profile
        </h5>
      </div>
    </DefaultLayout>
  );
}

export default Home;
