module.exports = {
  readAllCommentsQuery: 'SELECT * FROM comments where songId = 500',

  readAllCommentsStringQuery: 'SELECT * FROM comments WHERE stringId = "songname500"',

  readNumberOfCommentsQuery: 'SELECT COUNT(*) FROM comments where songId = 400',

  readNumberOfCommentsStringQuery: 'SELECT COUNT(*) FROM comments where songId = "songname400"',

  writeNewComment: `INSERT INTO comments (songId, profilePic, username, message, postedAt, songTime, followers)
  VALUES  ( ?,?,?,?,?,?,?)`,

  updateCommentQuery: `UPDATE comments
                      SET message = (?)
                      WHERE id = (SELECT id 
                                  FROM (SELECT * 
                                        FROM comments
                                        ) AS A
                                  WHERE message = (?)
                                  )`,
                                  
  deleteCommentQuery: 'DELETE FROM comments WHERE id = (?)',
};
