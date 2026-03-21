import "./css/statsContainer.css";
import Stats from "../cards/Stats";
import employeesIcon from "../../assets/icons/about-person-icon.png";
import waypointIcon from "../../assets/icons/about-target-icon.png";
import marketIcon from "../../assets/icons/about-market-icon.png";
import calendarIcon from "../../assets/icons/about-calendar-icon.png";

export default function StatsContainer() {
    return (
        <section className="stats-container">
            <div className="container stats-container_wrapper">
                <Stats 
                    number="150k+"
                    description="employees worldwide"
                    icon={employeesIcon}
                />
                <Stats 
                    number="70"
                    description="countries where we operate"
                    icon={waypointIcon}
                />
                <Stats 
                    number="125"
                    description="markets we deliever to"
                    icon={marketIcon}
                />
                <Stats 
                    number="160"
                    description="years of experience"
                    icon={calendarIcon}
                />
            </div>
        </section>
    )
}