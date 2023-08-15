// Extracting Dom Elements
let filterIssueForm = document.getElementById("filter-form");

let issueJson = document.getElementById("issue-data").getAttribute("data");

let issues = JSON.parse(issueJson);

let issueList = document.getElementById("issue-list");

filterIssueForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let filteredIssues = [];

  let labelsList = filterIssueForm.querySelectorAll("input[type=checkbox]");
  let labelsElements = [...labelsList].filter((ele) => ele.checked);

  let authorVal =
    document.getElementById("filter-author").value === ""
      ? null
      : document.getElementById("filter-author").value;
  let titleDescVal =
    document.getElementById("filter-search").value === ""
      ? null
      : document.getElementById("filter-search").value;

  let [...labelsArr] = labelsElements.map((ele) => ele.value);

  console.log(authorVal, titleDescVal, labelsArr);
  issues.map((ele) => {
    if (ele.author.includes(authorVal)) {
      console.log("Elel author : ", ele);
      if (!filteredIssues.includes(ele)) {
        filteredIssues.push(ele);
      }
    }

    if (ele.title.includes(titleDescVal)) {
      console.log("Elel title : ", ele);
      if (!filteredIssues.includes(ele)) {
        filteredIssues.push(ele);
      }
    }

    if (ele.description.includes(titleDescVal)) {
      console.log("Elel desc : ", ele);
      if (!filteredIssues.includes(ele)) {
        filteredIssues.push(ele);
      }
    }

    labelsArr.map((label) => {
      if (ele.labels.includes(label)) {
        if (!filteredIssues.includes(ele)) {
          filteredIssues.push(ele);
        }
      }
    });
  });

  issueList.innerHTML = ``;
  console.log(filteredIssues);
  if (filteredIssues.length === 0) {
    filteredIssues = issues;
  }
  for (let issue of filteredIssues) {
    let li = document.createElement("li");
    let labelsDiv = document.createElement("div");
    labelsDiv.classList.add("labels");
    for (let label of issue.labels) {
      let spanLabel = document.createElement("span");
      spanLabel.classList.add("label");
      spanLabel.style.backgroundColor = "#e74c3c";
      spanLabel.innerHTML = label;
      labelsDiv.appendChild(spanLabel);
    }
    let issueDiv = document.createElement("div");
    issueDiv.classList.add("issue-details");
    issueDiv.innerHTML = `
        <div class="issue-details">
            <div class="issue-title">Issue: ${issue.title}</div>
            <div class="issue-description">${issue.description}</div>
            <div class="author">Author: ${issue.author}</div>
        </div>
        <a href="/issues/delete/${issue._id}?projectId=${projectId}" class="delete-link" >Delete</a>     
        `;
    li.appendChild(labelsDiv);
    li.appendChild(issueDiv);
    issueList.appendChild(li);
  }
});
