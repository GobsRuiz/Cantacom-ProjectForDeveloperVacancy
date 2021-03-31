function teamMemberName() {
    let memberName = document.getElementById("thirdSection-memberName");
    let images = document.querySelectorAll(".thirdSection-imageTeamMembers-div");



    images.forEach(element => {
        element.addEventListener("mouseover", (e) => {
            memberName.innerText = e.target.children[0].getAttribute("alt");
        })
        element.addEventListener("mouseout", (e) => {
            memberName.innerText = "Nome do membro da equipe";
        })
    });
}teamMemberName()