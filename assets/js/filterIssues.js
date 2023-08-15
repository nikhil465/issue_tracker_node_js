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

  let authorVal = filterIssueForm.querySelector(
    "input[type=text][name=author]"
  ).ariaValueText;

  let titleDescVal = filterIssueForm.querySelector(
    "input[type=text][name=search]"
  ).ariaValueText;

  let [...labelsArr] = labelsElements.map((ele) => ele.value);

  issues.map((ele) => {
    if (ele.author.includes(authorVal)) {
      if (!filteredIssues.includes(ele)) {
        filteredIssues.push(ele);
      }
    }

    if (ele.title.includes(titleDescVal)) {
      if (!filteredIssues.includes(ele)) {
        filteredIssues.push(ele);
      }
    }

    if (ele.description.includes(titleDescVal)) {
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
        <a href="/issues/delete/${issue.id}?projectId=<%= locals.project._id %>" class="delete-link" >Delete</a>     
        `;
    li.appendChild(labelsDiv);
    li.appendChild(issueDiv);
    issueList.appendChild(li);
  }
});
