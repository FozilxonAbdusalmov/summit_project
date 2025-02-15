import "./Group.css";
import { GoArrowLeft } from "react-icons/go";
import { CiSquarePlus } from "react-icons/ci";
import { FaTrash } from "react-icons/fa6";
import { BiEditAlt } from "react-icons/bi";
function Group() {
  return (
    <div className="group">
      <div className="subjects_header">
        <div>
          <button>
            <GoArrowLeft />
          </button>
          <p>Group</p>
        </div>

        <button>
          <CiSquarePlus />
          Add Group
        </button>
      </div>
      <div className="group_main">
        <div className="group_main_teachers">
          <p className="logo_p">
            SUMM<span>IT</span>
          </p>
          <p className="open_time">
            Web Development <span>152 days ago</span>
          </p>
          <p className="group_objects">Java Script</p>

          <div className="group_numbers">
            <p>
              Number Students: <b>15</b>
            </p>
          </div>
          <div>
            <p>Odd days / 14:00 - 16:00</p>
          </div>

          <div className="group_main_teachers">
            <span>Teacher</span>
            <div>
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                alt="teacher_image"
              />
              <p>Fozilxon Abdusalamov</p>
              <div>
                <button>
                  <FaTrash />
                </button>
                <button>
                  <BiEditAlt />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
