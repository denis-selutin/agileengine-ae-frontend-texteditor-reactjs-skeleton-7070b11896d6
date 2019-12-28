function getSynonyms(word: string) {
    return fetch("http://localhost:8089/https://api.datamuse.com/words?max=10&ml=" + word.toString(),
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    words: result
                });
            },
            (error) => {
                console.log(error);
                this.setState({
                    error
                });
            }
        )
}


module.exports = getSynonyms;