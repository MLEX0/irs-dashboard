const db = require('../db')
class DashBoardController{
    async getCountAll(req, res){
        const records = await db.query('select count(p4001)  from v_829_4.sersol')
        res.header("content-type","application/json")
        res.header('Access-Control-Allow-Origin', '*');
        res.json(records.rows[0])
    }
    async getGender(req, res){
        const records = await db.query('select r7101  from v_829_4.sersol')
        res.header("content-type","application/json")
        res.header('Access-Control-Allow-Origin', '*');
        res.json(records.rows)
    }
    async getMilitaryTicket(req, res){
        const records = await db.query('select max( (select count(p2004d) from v_829_4.sersol  where p2004d notnull)) as "BiletYes",max((select count(p4001) from v_829_4.sersol  where p2004d isnull)) as "BiletNot" from v_829_4.sersol')
        res.header("content-type","application/json")
        res.header('Access-Control-Allow-Origin', '*');
        res.json(records.rows)
        //p2004d
    }

    async getAge(req, res){
        const records = await db.query('select age(p2005) from v_829_4.sersol')
        res.header("content-type","application/json")
        res.header('Access-Control-Allow-Origin', '*');
        res.json(records.rows)
    }
 
    async getEducation(req, res){
        const records = await db.query('select r7703 from v_829_4.sersol')
        res.header("content-type","application/json")
        res.header('Access-Control-Allow-Origin', '*');
        res.json(records.rows)
    }
    async getPassportSerial(req, res){
        const records = await db.query('select max( (select count(p4001) from v_829_4.sersol  where pasport_s notnull)) as "YesPassport",max((select count(p4001) from v_829_4.sersol where pasport_s isnull)) as "NoPassport"from v_829_4.sersol \n')
        res.header("content-type","application/json")
        res.header('Access-Control-Allow-Origin', '*');
        res.json(records.rows)
    }

    async getInnNumber(req, res){
        const records = await db.query('select max( (select count(p4001) from v_829_4.sersol  where inn notnull)) as "YesInn",max((select count(p4001) from v_829_4.sersol  where inn isnull)) as "NoInn"from v_829_4.sersol\n')
        res.header("content-type","application/json")
        res.header('Access-Control-Allow-Origin', '*');
        res.json(records.rows)
    }
    async getSnils(req, res){
        const records = await db.query('select max( (select count(p4001) from v_829_4.sersol  where snils  notnull)) as "YesSnils",max((select count(p4001) from v_829_4.sersol  where snils  isnull)) as "NoSnils"from v_829_4.sersol\n')
        res.header("content-type","application/json")
        res.header('Access-Control-Allow-Origin', '*');
        res.json(records.rows)
    }
}
module.exports = new DashBoardController()