# from langchain_google_genai import ChatGoogleGenerativeAI
# from browser_use import Agent
# from pydantic import SecretStr
# import os
# import asyncio
# from dotenv import load_dotenv
# load_dotenv()
# import os
# from browser_use import Agent, Browser, BrowserConfig

# os.environ["ANONYMIZED_TELEMETRY"] = "false"

# browser = Browser(
#     config=BrowserConfig(
#         chrome_instance_path="C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
#     )
# )

# api_key = os.getenv("GEMINI_API_KEY")

# llm = ChatGoogleGenerativeAI(model='gemini-2.0-flash-exp', api_key=SecretStr(os.getenv('GEMINI_API_KEY')))

# async def main():   
#     try:
#         agent = Agent(
#             task="Scrabe",
#             llm=llm,
#             browser=browser,
#         )
#         result = await agent.run()
#         print(result)
#     except Exception as e:
#         print("Error occurred:", e)
#     finally:
#         await browser.close()

# asyncio.run(main())


















from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os
import asyncio
from dotenv import load_dotenv
from browser_use import Agent, Browser, BrowserConfig
from langchain_google_genai import ChatGoogleGenerativeAI
from pydantic import BaseModel, SecretStr

load_dotenv()

app = FastAPI()

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow frontend requests
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

browser = Browser(
    config=BrowserConfig(
        chrome_instance_path="C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
    )
)

llm = ChatGoogleGenerativeAI(model='gemini-2.0-flash-exp', api_key=SecretStr(os.getenv('GEMINI_API_KEY')))

class TaskRequest(BaseModel):
    task: str

@app.post("/api/run-task")
async def run_task(task_request: TaskRequest):
    try:
        agent = Agent(
            task=task_request.task,
            llm=llm,
            browser=browser,
        )
        result = await agent.run()
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        await browser.close()


        

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)





















# from fastapi import FastAPI, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# import os
# import asyncio
# from dotenv import load_dotenv
# from browser_use import Agent, Browser, BrowserConfig
# from langchain_google_genai import ChatGoogleGenerativeAI
# from pydantic import BaseModel, SecretStr

# load_dotenv()

# app = FastAPI()

# # Enable CORS for React frontend
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # Allow frontend requests
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# browser = Browser(
#     config=BrowserConfig(
#         chrome_instance_path="C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
#     )
# )

# llm = ChatGoogleGenerativeAI(model='gemini-2.0-flash-exp', api_key=SecretStr(os.getenv('GEMINI_API_KEY')))

# class TaskRequest(BaseModel):
#     task: str

# @app.post("/api/run-task")
# async def run_task(task_request: TaskRequest):
#     try:
#         agent = Agent(
#             task=task_request.task,
#             llm=llm,
#             browser=browser,
#         )
#         logs = []
#         async for log in agent.run_with_logs():  # Assuming `run_with_logs` provides logs
#             logs.append(log)
        
#         result = {"status": "✅ Task completed", "logs": logs}
#         return result
#     except Exception as e:
#         print("Error occurred:", e)  # Log the error for debugging
#         raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")
#     finally:
#         await browser.close()
        
# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)