const User = require('../models/user.model');

const getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.query.username });
    if (!user) {
      return res.status(404).json({
        status: 'failed',
        message: 'not able to find user with requested username.',
      });
    }
    res.status(200).json({
      status: 'success',
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'failed',
      stack: err.stack,
      err,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      status: 'success',
    });
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      stack: err.stack,
      err,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, username } = req.body;
    const user = await User.findOneAndUpdate(
      req.query.id,
      { name, username },
      {
        new: true,
      }
    );
    res.status(201).json({
      status: 'success',
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'failed',
      stack: err.stack,
      err,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete(req.query.id);
    res.status(204).json({
      status: 'success',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'failed',
      stack: err.stack,
      err,
    });
  }
};

module.exports = { getUser, createUser, updateUser, deleteUser };
