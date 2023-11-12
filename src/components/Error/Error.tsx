import errorImg from "../../images/error.jpg";

interface ErrorProps {
  errorMessage: string;
}

export const Error: React.FC<ErrorProps> = ({ errorMessage }) => {
  return (
    <>
      <div className="text-white mx-auto max-w-lg py-7">
        <div className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! {errorMessage}</span>
        </div>
        <div>
          <img
            src={errorImg}
            alt="error img"
            className="max-w-lg h-auto object-contain mg-auto py-10"
          />
        </div>
      </div>
    </>
  );
};
