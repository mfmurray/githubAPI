


//filter commits data from api call
export function filterCommits(commitsData) {

  var data=[]; var obj
  commitsData.forEach((arr, index) => {
      obj = {}
      obj.author = arr.author.login
      obj.authorUrl = arr.author.html_url
      obj.iconUrl = arr.author.avatar_url
      obj.message = arr.commit.message
      obj.hash = arr.sha
      obj.hashUrl = arr.html_url
      data.push(obj)
  })

  return data

}
