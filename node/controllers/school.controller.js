const mongoose = require('mongoose');
const httpStatus = require('http-status');

const { SchoolModel } = require('../models');

const getSchools = async (req, res) => {
  const schools = await SchoolModel.find({});
  res.json(schools);
}

const getSchool = async (req, res) => {
  try {
    const school = await SchoolModel.findById(new mongoose.Types.ObjectId(req.params.schoolId));
    if (!school) {
      return res.status(httpStatus.NOT_FOUND).json({ error: 'School not found' });
    }
    res.json(school);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({ error: 'Invalid school ID' });
  }
}

const createSchool = async (req, res) => {
  const school = await SchoolModel.create(req.body);
  if (!school) {
    return res.status(httpStatus.BAD_REQUEST).json({ error: 'Invalid data' });
  }
  res.status(httpStatus.CREATED).json(school);
}

const updateSchool = async (req, res) => {
  try {
    const school = await SchoolModel.findByIdAndUpdate(
      new mongoose.Types.ObjectId(req.params.schoolId), 
      req.body, 
      { new: true }
    );
    if (!school) {
      return res.status(httpStatus.NOT_FOUND).json({ error: 'School not found' });
    }
    res.json(school);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({ error: 'Invalid school ID' });
  }
}
const deleteSchool = async (req, res) => {
  try {
    await SchoolModel.findByIdAndDelete(new mongoose.Types.ObjectId(req.params.schoolId));
    res.status(httpStatus.NO_CONTENT).json();
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({ error: 'Invalid school ID' });
  }
}

module.exports = {
  getSchools,
  getSchool,
  createSchool,
  updateSchool,
  deleteSchool,
};