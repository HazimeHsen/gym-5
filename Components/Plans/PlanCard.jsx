const PlanCard = ({ data }) => {
  return (
    <div className="border border-gray p-4 py-6 w-[300px] flex flex-col justify-between">
      <div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-extraLarge">{data?.planName}</h2>
            <span className="text-xl">
              $<span className="font-bold text-main">{data?.price}</span>/month
            </span>
          </div>
          {/* <h2 className="text-center mt-10 font-bold text-main">
            Most Popular
          </h2> */}
        </div>
        <div className="my-6">
          <h2>Features:</h2>
          <ul>
            {data?.plans.map((plan, index) => (
              <li className="my-2" key={index}>
                {" "}
                <i className="fa-solid fa-check mx-2 text-lightGreen"></i>{" "}
                <span>{plan.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
