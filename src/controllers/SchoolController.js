import { SchoolRepository } from '../repositories/SchoolRepository.js';

export class SchoolController {
  constructor() {
    this.schoolRepository = new SchoolRepository();
  }

  async getAll(req, res) {
    try {
      const schools = await this.schoolRepository.findAll();
      res.json(schools);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getRequestedSchool(req, res) {
    try {
      const schoolRequest = await this.schoolRepository.findSchoolClosestMatch(req.query.searchValue);
      res.json(schoolRequest);
      console.log(schoolRequest);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getSchoolByName(req, res) {
    try {
      const schoolNameRequest = await this.schoolRepository.findSchoolByName(req.params.schoolname);
      res.json(schoolNameRequest);
      console.log(schoolNameRequest);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
