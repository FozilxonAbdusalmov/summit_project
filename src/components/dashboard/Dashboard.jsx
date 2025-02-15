import "./Dashboard.css";
import { TbBriefcaseFilled } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa6";
import { IoIosArrowRoundUp } from "react-icons/io";
import { GoPackage } from "react-icons/go";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard_statistic">
        <div className="dash_container">
          <div>
            <div className="dash_items teacher">
              <TbBriefcaseFilled />
            </div>
            <p>Total Teacher</p>
            <div className="dash_container_persentage">
              <div>
                <IoIosArrowRoundUp />
              </div>
              <span>46.11%</span>
            </div>
          </div>
          <h1>100</h1>
        </div>
        <div className="dash_container">
          <div>
            <div className="dash_items student">
              <FaGraduationCap />
            </div>
            <p>Total Student</p>
            <div className="dash_container_persentage">
              <div>
                <IoIosArrowRoundUp />
              </div>
              <span>15.6</span>
            </div>
          </div>
          <h1>600</h1>
        </div>
        <div className="dash_container">
          <div>
            <div className="dash_items groups">
              <GoPackage />
            </div>
            <p>Total Teacher</p>
            <div className="dash_container_persentage">
              <div>
                <IoIosArrowRoundUp />
              </div>
              <span>46.11%</span>
            </div>
          </div>
          <h1>102</h1>
        </div>
      </div>
      <div className="dashboard_main">
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
