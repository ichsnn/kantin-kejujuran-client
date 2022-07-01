export const InvalidID = () => {
  return (
    <div className="text-red-500 text-xs">Invalid Student ID</div>
  );
}

export const InvalidIDEmpty = () => {
  return (
    <div className="text-red-500 text-xs">Student ID is required</div>
  );
}

export const InvalidIDLength = () => {
  return (
    <div className="text-red-500 text-xs">Student ID must have 5 characters</div>
  );
}

export const InvalidPassword = () => {
  return (
    <div className="text-red-500 text-xs">Invalid Password</div>
  );
}

export const InvalidPasswordLength = () => {
  return (
    <div className="text-red-500 text-xs">Password should be minimum 8 characters</div>
  );
}

export const InvalidPasswordEmpty = () => {
  return (
    <div className="text-red-500 text-xs">Password is required</div>
  );
}

export const InvalidAccount = ({message}) => {
  return (
    <div className="text-center text-red-500 text-sm">{message}</div>
  );
}