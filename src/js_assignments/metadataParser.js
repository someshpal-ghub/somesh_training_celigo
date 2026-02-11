// Create an Object MetadataParser using constructor functions
// The Object should have private properties _version, _channel, _keyField 
// Object should have get and set function for each property
// Add a method in the class getKeyFields, which takes an array of JSON objects (eg [{channel: ‘A’}, {channel: ‘B’}, {channel ‘C’}]) as input and returns an array of values of _keyField, input array.

function MetadataParser(version, channel, keyField) {
  let _version = version;
  let _channel = channel;
  let _keyField = keyField;


  this.getVersion = function () {
    return _version;
  };

  this.setVersion = function (version) {
    _version = version;
  };



  this.getChannel = function () {
    return _channel;
  };

  this.setChannel = function (channel) {
    _channel = channel;
  };



  this.getKeyField = function () {
    return _keyField;
  };

  this.setKeyField = function (keyField) {
    _keyField = keyField;
  };

  /**
   * 
   * @param {*} channelsArr 
   * @returns 
   */
  this.getKeyFields = function (channelsArr) {
  return channelsArr.map(entry => entry[_keyField]);
};
}

function groupObjects(channelsObjs, channelKey) {
  let result = {}

  for (let channelsObj of channelsObjs) {
    const channelVal = channelsObj[channelKey];

    if(!result[channelVal]) {
      result[channelVal] = [];
    }

    result[channelVal].push(channelsObj);
  }

  return result;
}