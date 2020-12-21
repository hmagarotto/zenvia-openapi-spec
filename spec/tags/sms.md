The SMS channel may be used after its activation on [Zenvia platform](https://app.zenvia.com/home/credentials).
<br/>

Webhooks allow you to receive events in the configured URL. [Learn more here](#tag/Webhooks).

<br/>

## How to view your single shots report
You can also view the list of shots fired and their status by accessing the [Zenvia Platform](https://app.zenvia.com/notifications/dashboard/api)

<br/>

## SMS sender and recipient
When you send some message for one contact using SMS channel:

* Recipient: is the phone number of contact
* Sender: is the SMS sender id

When you receive a message from one contact, the sender and recipient is inverted:

* Recipient: is the SMS sender id
* Sender: is the phone number of contact

In API the sender is the field `from` and the receiver is the field `to` of message object.

You can also view the list of shots fired and their status by accessing the [Zenvia Platform]
