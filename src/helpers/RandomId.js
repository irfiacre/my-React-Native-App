export default (id) => `${Math.random().toString(36).substring(7)}-${(id||0)}`;
