const methods = (iface) => {
    const data = [];
    for (const item in iface) {
        const key = iface[item];
        data.push([key.name, key.length]);
    }
    return data;
}

const iface = {
    m1: x => [x],
    m2: function (x, y) {
      return [x, y];
    },
    m3(x, y, z) {
      return [x, y, z];
    }
}

console.log(methods(iface));