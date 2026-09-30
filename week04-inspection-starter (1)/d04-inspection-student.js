const viewer = window.InspectionViewer;

const uiArea = document.querySelector('#student-ui');
uiArea.innerHTML = `
<div style="padding:10px">
  <button id="btnP1">P1 안내판(指示牌)</button>
  <button id="btnP2">P2 1층 밸브(1层阀门)</button>
  <button id="btnP3">P3 2층 제어함(2层控制柜)</button>
  <button id="btnHome">초기화(复位相机)</button>
  <div id="infoText" style="margin-top:8px; color:white;"></div>
</div>
`;

const poiList = viewer.model.poi;

document.querySelector('#btnP1').onclick = ()=>{
  const p1 = poiList.find(item=>item.name === "P1");
  viewer.controls.goto({
    target: p1.position,
    distance: 8,
    fov: 45
  });
  document.querySelector('#infoText').innerText = "P1: 안내판 - 건물이름과 층수 확인";
};

document.querySelector('#btnP2').onclick = ()=>{
  const p2 = poiList.find(item=>item.name === "P2");
  viewer.controls.goto({
    target: p2.position,
    distance: 5,
    fov: 45
  });
  document.querySelector('#infoText').innerText = "P2: 1층 밸브 - 밸브 식별번호 및 상태 확인";
};

document.querySelector('#btnP3').onclick = ()=>{
  const p3 = poiList.find(item=>item.name === "P3");
  viewer.controls.goto({
    target: p3.position,
    distance: 5,
    fov: 45
  });
  document.querySelector('#infoText').innerText = "P3: 2층 제어함 - 제어함 확인";
};

document.querySelector('#btnHome').onclick = ()=>{
  viewer.controls.home();
  document.querySelector('#infoText').innerText = "";
};