import "./styles.css";

export default function App() {
  parentClickFnc = (event) => {
    var parent = event.target;
    // var nextli = parent.parent().next().children().children();
    console.log(event.target);
    if (parent.checked === true) {
      console.log("parent checked");
      var allChildList = document.getElementsByClassName("child");
      // allChildList[0].checked = "checked";
      var list1 = allChildList[0].childNodes;
      console.log(allChildList[0].childNodes);
      // for (i = 0 in list1.length) {
      //   console.log(list1);
      // }
      // nextli.each(function () {
      //   $(this).children().prop("checked", true);
      // });
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div class="parent" onClick={this.parentClickFnc}>
        <input type="checkbox" />
        parent
      </div>
      <div>
        <ul class="child">
          <li>
            <input type="checkbox" />
            child 1
          </li>
          <li>
            <input type="checkbox" />
            child 2
          </li>
          <li>
            <input type="checkbox" />
            child 3
          </li>
        </ul>
      </div>
      <div class="parent">
        <input type="checkbox" />
        parent
      </div>
      <div>
        <ul class="child">
          <li>
            <input type="checkbox" />
            child 1
          </li>
          <li>
            <input type="checkbox" />
            child 2
          </li>
          <li>
            <input type="checkbox" />
            child 3
          </li>
        </ul>
      </div>
    </div>
  );
}
