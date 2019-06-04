from flask import Flask, render_template,request,jsonify
import os, json
from SVY21 import SVY21 as coordinate_convertor_class

app = Flask(__name__)
@app.route("/")
def init():
    return render_template("index.html")

@app.route("/coordinate-convertor-function",methods=["GET","POST"])
def cc():
    input_data_set = json.loads(request.data.decode('utf-8'))["FinalDataset"]
    coordinate_convertor = coordinate_convertor_class()
    result_array = []
    for i in input_data_set:
        northing = float(i["Y"])
        easting = float(i["X"])
        conversion_result = coordinate_convertor.computeLatLon(northing,easting)
        dump_dict = {
            "lat":conversion_result[0],
            "lng":conversion_result[1]
        }
        result_array.append(dump_dict)
    return jsonify(result_array)

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)