import os
import json
import requests

def handler(event, context):
    q = event.get("queryStringParameters", {}).get("q")
    albumToggle = event.get("queryStringParameters", {}).get("albumToggle")
    client_id = os.environ.get("REACT_APP_CLIENT_ID")

    try:
        url = f"https://api-v2.soundcloud.com/search/playlists" if albumToggle == "false" else f"https://api-v2.soundcloud.com/search/tracks"

        params = {
            "client_id": client_id,
            "limit": 20,
            "q": q,
            "linked_partitioning": True,
        }

        response = requests.get(url, params=params)
        response.raise_for_status()  # Raise HTTPError for bad responses (4xx or 5xx)

        data = response.json()
        items = []
        if 'collection' in data:
          for item in data['collection']:
            thumbnail = item.get("artwork_url") or (item.get("user", {}).get("avatar_url"))
            items.append({
                "id": item["id"],
                "title": item["title"],
                "thumbnail": thumbnail
            })
        

        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Cache-Control": "no-cache",
            },
            "body": json.dumps(items),
        }
    except requests.exceptions.RequestException as e:
        status_code = e.response.status_code if e.response else 500

        return {
            "statusCode": status_code,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Cache-Control": "no-cache",
            },
            "body": json.dumps({"message": "Failed to fetch data."}),
        }
    except Exception as e:
        print(e)
        return {
            "statusCode": 500,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Cache-Control": "no-cache",
            },
            "body": json.dumps({"message": "Failed to fetch data."}),
        }