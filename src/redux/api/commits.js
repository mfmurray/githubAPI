

export async function getCommits() {
  console.log('get commits api')
    const response = await fetch(`https://api.github.com/repos/mfmurray/test/commits`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })

    return await response.json();
}
