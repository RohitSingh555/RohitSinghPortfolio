# Automation Script
import csv
import sqlite3
connection = sqlite3.connect("C:\SpyThemAll\SpyThemAll\db.sqlite3")
cursor = connection.cursor()
file = open("C:\SpyThemAll\SpyThemAll\spta.csv")
contents = csv.reader(file)
insert_records = "INSERT INTO Spymain_model_info (Username,'first_name','last_name','email','date_of_birth','height_feet','weight','bodyshape','marital_status', 'Profession','College','approx_followers','Country','state', 'city','Rating','description','created_at','updated_at','profile_photo') VALUES(?, ?,?, ?,?, ?,?, ?,?, ?,?, ?,?, ?,?, ?,?, ?,?, ?)"

cursor.executemany(insert_records, contents)
select_all = "SELECT * FROM Spymain_model_info"
rows = cursor.execute(select_all).fetchall()
for r in rows:
    print(r)
connection.commit()
connection.close()