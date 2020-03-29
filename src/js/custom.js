// TOC START
document.addEventListener('DOMContentLoaded', () => {
  const mainLi = document.querySelectorAll('.ol-toc .ol-toc-item:nth-child(odd)');
  const nestedLi = document.querySelectorAll('.ol-toc .ol-toc-item .ol-toc-nested li');

  for(let i = 0; i < mainLi.length; i++) {
    let nextEle = mainLi[i].nextElementSibling;
    nextEle.style.display = "none";
    
    mainLi[i].addEventListener('click', () => {
      if(nextEle.style.display === "none") nextEle.style.display = "block";
      else nextEle.style.display = "none";
    });
  }

  for(let i = 0; i < nestedLi.length; i++) {
    nestedLi[i].addEventListener('click', () => {
      window.location.href = "#" + nestedLi[i].dataset.href;
    });
  }
});
// TOC END