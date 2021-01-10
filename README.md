For Future Reference Backend code 

To run locally: 
run mongodb locally
(if using homebrew, try `brew services start mongodb-community@4.4` to start, connect a mongo shell to that running instance by running `mongo` in a separate terminal window, and then use `brew services stop mongodb-community` to stop)
yarn dev 

Sample curl requests:

```
# create new entry
curl -X POST -H "Content-Type: application/json" -d '{
    "addresseeName": "Kayla",
    "authorName": "Mich",
    "senderFirstName":  "Michelle",
    "senderLastName": "Yu",
    "senderEmail": "yu.michelle97@gmail.com",
    "recipientEmails": {"test1", "test2"},
    "reflectionText": "test"
}' "https://for-future-reference.herokuapp.com/api"
```