export const InvalidAlert = ({ message }) => {
  return (
    <div className="bg-red-500 text-white text-sm rounded-lg px-4 py-2 m-2">
      {message}
    </div>
  );
};

export const InvalidID = () => {
  return <div className="text-red-500 text-xs">
    Invalid ID
  </div>;
};

export const InvalidIDEmpty = () => {
  return <div className="text-red-500 text-xs">
    ID is required
  </div>;
};

export const InvalidIDLength = () => {
  return <div className="text-red-500 text-xs">
    ID must be 5 characters long
  </div>;
};

export const InvalidPassword = () => {
  return <div className="text-red-500 text-xs">Invalid Password</div>;
};

export const InvalidPasswordLength = () => {
  return (
    <div className="text-red-500 text-xs">
      Password should be minimum 8 characters
    </div>
  );
};

export const InvalidPasswordEmpty = () => {
  return <div className="text-red-500 text-xs">Password is required</div>;
};

export const InvalidError = ({ message }) => {
  return <div className="text-center text-red-500 text-sm">{message}</div>;
};

export const InvalidNameEmpty = () => {
  return <div className="text-red-500 text-xs">Name is required</div>;
};

export const InvalidPasswordNotMatch = () => {
  return <div className="text-red-500 text-xs">Password does not match</div>;
};

export const InvalidImage = () => {
  return (
    <div className="text-red-500 text-xs">Image must have 1:1 aspect ratio</div>
  );
};

export const InvalidImageEmpty = () => {
  return <div className="text-red-500 text-xs">Image is required</div>;
};

export const InvalidDescriptionEmpty = () => {
  return <div className="text-red-500 text-xs">Description is required</div>;
};

export const InvalidPriceEmpty = () => {
  return <div className="text-red-500 text-xs">Price is required</div>;
};
