export const getFirstName = (name: string) => {
  return name.split(" ")[0];
};

export const getLastNames = (name: string) => {
  const nameParts = name.split(" ");
  nameParts.shift();
  return nameParts.join(" ");
};
