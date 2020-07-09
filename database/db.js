class Database {
    constructor() {
        this.data = [];
    }

    async insert(obj) {
        await this.data.push(obj);
    }

    async findById(id) {
        const result = await this.data.find(user => user.id === id);
        if (!result)
            throw new Error('No user has found in database')
        return result;
    }

    clear() {
        while(this.data.length > 0) this.data.pop();
    }
}

const database = new Database();

module.exports = {
  database
};
