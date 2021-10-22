
const link ={
  github : "EduardoAmarante",
  youtube : "droidhs",
  facebook : "",
  instagram : "eduardo4marante",
  twitter : "eduardo4marante"
}

function changeSocialMediaLinks(){
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${link[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${link.github}`

  fetch(url)
  .then(response => response.json() )
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userPhoto.src = data.avatar_url
    userGitHub.href = data.html_url
    userLogin.textContent = data.login
  })

}

getGitHubProfileInfos()
