document.addEventListener('DOMContentLoaded', function () {

  function showContent(tabName) {
    const tabContents = document.getElementsByClassName('tshirt-container');
    for (const content of tabContents) {
      content.style.display = 'none';
    }
    const selectedContent = document.getElementById(`${tabName}-section`);
    if (selectedContent) {
      selectedContent.style.display = 'flex';
    }
  }

  const tabButtons = document.getElementsByClassName('tab-button');
  for (const button of tabButtons) {
    button.addEventListener('click', function () {
      const tabName = this.dataset.tab;
      showContent(tabName);
    });
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const randomButton = document.getElementById('random-button');
  randomButton.addEventListener('click', function () {
    const tshirtContainers = document.querySelectorAll('.tshirt-container');
    for (const container of tshirtContainers) {
      container.style.display = 'none';
    }
    const randomIndex = getRandomInt(tshirtContainers.length);
    tshirtContainers[randomIndex].style.display = 'flex';
  });

  function likeReview(postDateId) {
    const postDateElement = document.getElementById(postDateId);
    const likeButton = postDateElement.nextElementSibling;


    let likeCount = parseInt(likeButton.innerText);
    likeCount++;
    likeButton.innerText = likeCount;
  }

});
