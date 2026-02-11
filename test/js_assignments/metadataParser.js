const parser = new MetadataParser("1.0", "WEB", "channel");

const input = [
  { channel: "A" },
  { channel: "B" },
  { channel: "C" }
];

console.log(parser.getKeyFields(input));

/* =====================================================================*/
const channelObjs = [ 
  {
    "channel": "A",
    "name": "shoe"
  },
  {
    "channel": "A",
    "name": "electronics"
  },
  {
    "channel": "B",
    "name": "apparel"
  },
  {
    "channel": "C",
    "name": "electronics"
  }
];

console.log(groupObjects(channelObjs, 'channel'));

/*================================================ */


const objects = [
    { id: 3, name: "C" },
    { id: 1, name: "A" },
    { id: 2, name: "B" }
];

const objSorter = new SortObjectArray(objects, "id");
console.log(objSorter.getSortedArray());
