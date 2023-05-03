import React from "react";
import '../../All styles/How_It_Works.css'

const How_It_Works = () => {
  return (
    <>
      <div className="Main_container mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div className="text_lines_container">
                <div className="line_left"><hr /></div>
                <div>HOW IT WORKS</div>
                <div className="line_right line_left"><hr /></div>
              </div>
            </div>

          </div>
          <div className="row mt-4">
            <div className="col-10">
              <div className="HowItworks_content_container">
                <div className="content_left_right_container">
                  <div className="text-center">
                    Step 1
                  </div>
                  <div className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi est velit quod ex architecto. Sunt enim autem doloremque beatae vel. Sunt enim autem doloremque beatae vel.</div>
                </div>
                <div className="content_left_right_container">
                  <div className="text-center">
                    Step 3
                  </div>
                  <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi est velit quod ex architecto. Sunt enim autem doloremque beatae vel. Sunt enim autem doloremque beatae vel.</div>
                </div>
              </div>
            </div>

          </div>
          <div className="row mt-4">
            <div className="bottom_line"><hr /></div>
          </div>


          <div className="row mt-1">
            <div className="col-12">
              <div className="d-flex justify-content-end">
                <div className="HowItworks_content_container1">
                  <div className="content_left_right_container1">
                    <div className="text-center">
                      Step 2
                    </div>
                    <div className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi est velit quod ex architecto. Sunt enim autem doloremque beatae vel. Sunt enim autem doloremque beatae vel.</div>
                  </div>
                  <div className="content_left_right_container1">
                    <div className="text-center">
                      Step 4
                    </div>
                    <div className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi est velit quod ex architecto. Sunt enim autem doloremque beatae vel. Sunt enim autem doloremque beatae vel.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default How_It_Works