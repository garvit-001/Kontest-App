import { format } from "date-fns";
import "./Contest.css";

const Contest = ({ contest }) => {
  const start_time = format(
    new Date(contest.start_time),
    "MM-dd-yyyy HH:mm:ss"
  );

  const end_time = format(new Date(contest.end_time), "MM-dd-yyyy HH:mm:ss");

  const start = contest.start_time.replace(/[^a-zA-Z0-9 ]/g, "");
  const end = contest.end_time.replace(/[^a-zA-Z0-9 ]/g, "");
  const text = contest.name.replace(/ /g, "+");
  const calendar = `https://calendar.google.com/event?action=TEMPLATE&dates=${start}/${end}&text=${text}&location=${contest.url}`;

  return (
    <div className="container-big">
      <div className="contest-card">
        <span className="rounded-full bg-green-100 text-green-600 text-xs site-link-name">
          {contest.site}
        </span>

        <div className="mt-4 text-gray-500 sm:pr-8 ">
          <img
            src="https://getwallpapers.com/wallpaper/full/b/3/8/358806.jpg"
            className="logo"
            alt="contest site logo"
          />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 logo"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clipRule="evenodd"
            />
          </svg> */}

          <h5 className="">{contest.name}</h5>

          <dl className="timings">
            <div className="time-container">
              <dt className=" start">Start Time</dt>

              <dd className="start">{start_time}</dd>
            </div>

            <div className="time-container">
              <dt className="start">End Time</dt>

              <dd className="start">{end_time}</dd>
            </div>
          </dl>
          <div className="actions">
            <div>
              <a href={calendar} target="_blank" rel="noreferrer">
                <p className="text-indigo-600 links">
                  <span>Add Event To Calendar</span>
                </p>
              </a>
            </div>
            <div>
              <p className="text-indigo-600 links">
                <a href={contest.url} target="_blank" rel="noreferrer">
                  <span>Url</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contest;
