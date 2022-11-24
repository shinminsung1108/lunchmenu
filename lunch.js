function lunch() {
    let foods = ["돈까스", "중국집", "카레", "부대찌개", "닭갈비", "초밥", "분식집", "도시락", "쌀국수", "칼국수"];

    let su = Math.random() * 1000;
    let menu = Math.round(su % (foods.length - 1));

    const element = document.getElementById('menu_name');
    element.innerHTML = foods[menu]

    console.log(foods[menu]);
}