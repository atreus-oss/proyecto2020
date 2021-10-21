import phonenumbers
from phonenumbers import carrier, geocoder, timezone

mobileNo = input("Ingrese el numero de telefono con el codigo del pais: ")
mobileNo = phonenumbers.parse(mobileNo)

#get timezone a phone number
print(timezone.time_zones_number(mobileNo))

#getting carrier of a phone number
print(carrier.name_for_number(mobileNo))

#getting region information
print(geocoder.description_for_number(mobileNo))

#validating a phone number
print("numero telefonico valido: ",phonenumbers.is_valid_number(mobileNo))

#checking possibility of a number
print("checking possibility of number: ",phonenumbers.is_possible_number(mobileNo))