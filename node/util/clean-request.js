const cleanRequest = (request) => {
  return Object.fromEntries(
    Object.entries(request).filter(([_, v]) => v != undefined)
  );
};

module.exports = cleanRequest;
