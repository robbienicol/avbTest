import React from "react";
import Avatar from "@mui/material/Avatar";

const TopComments = ({ comments }) => {
  function sortComments(comments, filterAmount) {
    let counts = {};
    //this function checks to see how many times a name is duplicated
    comments.forEach((x) => {
      counts[x.name] = (counts[x.name] || 0) + 1;
    });
    var result = Object.keys(counts).map((e) => ({
      name: e,
      count: counts[e],
    }));
    //this sorts the result in order
    const sortInOrder = result.sort(function (a, b) {
      return parseFloat(b.count) - parseFloat(a.count);
    });
    //this chops down the results to the top 3
    return sortInOrder.slice(0, filterAmount);
  }

  const finalThree = sortComments(comments, 3).map((e) => {
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
