// dummy 데이터를 입력하고 싶을 때
// const { User } = require('./userSchema');

class Database {
    constructor() {
        this.data = []
    }

    insert(obj) {
        this.data.push(obj);
    }

    findById(id) {
        const result = this.data.find(user => user.id === id);
        if (!result)
            throw new Error('No user has found in database')
        return result;
    }

    clear() {
        while(this.data.length > 0) this.data.pop();
    }
}

const database = new Database();
// dummy 데이터를 입력하고 싶을 때
// database.insert(new User('user1', '123123'));

module.exports = {
  database
};
