import React from "react";
import Avatar from "@mui/material/Avatar";

const TopComments = ({ comments }) => {
  let counts = {};
  comments.forEach((x) => {
    counts[x.name] = (counts[x.name] || 0) + 1;
  });
  var result = Object.keys(counts).map((e) => ({ name: e, count: counts[e] }));
  const sortInOrder = result.sort(function (a, b) {
    return parseFloat(b.count) - parseFloat(a.count);
  });
  const topThree = sortInOrder.slice(0, 3);
  const finalThree = topThree.map((e) => {
    return (
      <div>
        <Avatar>{e.name.charAt(0)}</Avatar>

        <p>
          {e.name} Posted {e.count} Times
        </p>
      </div>
    );
  });

  return (
    <div>
      <h1>Top Users</h1>
      {finalThree}
    </div>
  );
};

export default TopComments;
