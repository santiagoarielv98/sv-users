import User from "../models/user.model";

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.render("users/home", {
    title: "Users",
    users,
  });
};

export const createUser = (req, res) => {
  res.render("users/create", { title: "Create User" });
};

export const postCreateUser = async (req, res) => {
  const { name, email, password, username, role } = req.body;
  const user = new User({ name, email, password, username, role });
  await user.save();
  res.redirect("/users");
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.redirect("/users");
};

export const editUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.render("users/edit", { title: "Edit User", user });
};

export const postEditUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, username, role } = req.body;
  const user = await User.findByIdAndUpdate(id, {
    name,
    email,
    username,
    role,
  });
  res.redirect("/users");
};
