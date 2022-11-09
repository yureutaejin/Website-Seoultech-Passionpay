import pymysql

connect = pymysql.connect(host='db', port=3306, user="test_link", password="1q2w3e4r", db="test_link")

cur = connect.cursor()
sql = "select * from test_link.test"
cur.execute(sql)

rows = cur.fetchall()
print(rows)

connect.close()
