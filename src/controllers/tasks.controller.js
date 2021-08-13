import connect from "../database";

export const getTasks = async (req, res) => {
  const query = "SELECT * FROM tasks";
  const response = await connect.query(query);

  res.status(200).json(response.rows);
};

export const getTasksCount = async (req, res) => {
  const query = "SELECT COUNT(*) FROM tasks";
  const response = await connect.query(query);

  res.status(200).json(response.rows[0].count);
};

export const getTask = async (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM tasks where id = $1 limit 1";
  try {
    const response = await connect.query(query, [id]);

    res.status(200).json(response.rows[0]);
  } catch (error) {
    console.log("err", error.message);
  }
};

export const saveTask = async (req, res) => {
  const {
    title,
    description
  } = req.body;
  const query = `INSERT INTO tasks (title, description) 
    VALUES ($1, $2) RETURNING *`;
  const result = await connect.query(query, [title, description]);

  // console.log("el ress", result.rowCount);
  res.status(200).json(result.rows[0]);
};

export const deleteTask = async (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM tasks where id = $1";
  const response = await connect.query(query, [id]);

  // console.log("ress delete", response)
  // res.status(200).json(response.rowCount);
  res.sendStatus(204);
};

export const updateTask = async (req, res) => {
  const id = req.params.id;
  const body = req.body
  const query =['UPDATE tasks SET'];
  console.log("el body", req.body)
  
  try {
    
    let set = []
    Object.keys(body).forEach(function (key, i) {
      set.push(key + ' = ($' + (i + 1) + ')'); 
    });

    query.push(set.join(', '));
    query.push('WHERE id = ' + id );
    
    var colValues = Object.keys(body).map(function (key) {
      return body[key];
    });

    const strQuery = query.join(' ')
    const result = await connect.query( strQuery , colValues );

    // console.log("el ress", result );
    res.sendStatus(204);

  } catch (error) {
    console.log("err", error.message)
    
  }
  
};