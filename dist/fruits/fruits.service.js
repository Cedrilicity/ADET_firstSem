"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruitsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let FruitsService = class FruitsService {
    db;
    constructor(db) {
        this.db = db;
    }
    pool = () => this.db.getPool();
    async create(createFruitDto) {
        const { name, color, weight, origin } = createFruitDto;
        await this.db
            .getPool()
            .execute('INSERT INTO fruits (name, color, weight, origin) VALUES (?, ?, ?, ?)', [name, color, weight, origin]);
        return 'Fruit successfully added';
    }
    async findAll() {
        const [rows] = await this.pool().execute('SELECT * FROM fruits');
        return rows;
    }
    async findOne(id) {
        const [rows] = await this.pool().execute('SELECT * FROM fruits WHERE id = ?', [id]);
        const fruit = rows[0];
        return fruit;
    }
    async update(id, updateFruitDto) {
        const { name, color, weight, origin, ...rest } = updateFruitDto;
        const [rows] = await this.pool().execute('UPDATE fruits SET name = ?, color = ?, weight = ?, origin = ?, sweetness = ?, sourness = ?, spiciness = ?, saltiness = ?, bitterness = ? WHERE id = ?', [
            name,
            color,
            weight,
            origin,
            rest.sweetness,
            rest.sourness,
            rest.spiciness,
            rest.saltiness,
            rest.bitterness,
            id,
        ]);
        return 'Fruit successfully updated';
    }
    async remove(id) {
        const [rows] = await this.pool().execute('DELETE FROM fruits WHERE id = ?', [id]);
        return 'Fruit successfully removed';
    }
};
exports.FruitsService = FruitsService;
exports.FruitsService = FruitsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], FruitsService);
//# sourceMappingURL=fruits.service.js.map