const findMarker = (arr, markerSize) => {
  for (let i = 0; i < arr.length - markerSize; i++) {
    const potential = arr.slice(i, i + markerSize);
    if (new Set(potential).size === markerSize) {
      return i + markerSize;
    }
  }
  return null;
};

module.exports = { findMarker };
