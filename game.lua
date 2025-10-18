-- 숫자 맞추기: 가장 쉬운 Lua 콘솔 게임

math.randomseed(os.time())

local function trimWhitespace(text)
  if text == nil then return nil end
  return text:gsub("^%s+", ""):gsub("%s+$", "")
end

local function promptForGuess(minValue, maxValue)
  while true do
    io.write(string.format("숫자를 입력하세요 (%d-%d): ", minValue, maxValue))
    local line = io.read("*l")
    if line == nil then
      return nil -- EOF (예: Ctrl+D)
    end
    line = trimWhitespace(line)
    local numberValue = tonumber(line)
    if numberValue == nil then
      print("유효한 숫자를 입력하세요.")
    else
      return numberValue
    end
  end
end

local function askToPlayAgain()
  while true do
    io.write("다시 하시겠습니까? (y/n): ")
    local line = io.read("*l")
    if line == nil then return false end
    line = trimWhitespace(line):lower()
    if line == "y" or line == "yes" or line == "" then
      return true
    elseif line == "n" or line == "no" then
      return false
    else
      print("y 또는 n으로 대답해 주세요.")
    end
  end
end

local function playRound(minValue, maxValue)
  local secretNumber = math.random(minValue, maxValue)
  local attemptCount = 0

  while true do
    local guess = promptForGuess(minValue, maxValue)
    if guess == nil then
      print("\n입력이 종료되었습니다.")
      return false
    end

    if guess < minValue or guess > maxValue then
      print(string.format("%d에서 %d 사이의 숫자만 입력하세요.", minValue, maxValue))
    else
      attemptCount = attemptCount + 1
      if guess < secretNumber then
        print("업!")
      elseif guess > secretNumber then
        print("다운!")
      else
        print(string.format("정답! 시도 횟수: %d회", attemptCount))
        break
      end
    end
  end

  return askToPlayAgain()
end

local function main()
  local minValue, maxValue = 1, 100
  print("숫자 맞추기 게임에 오신 것을 환영합니다!")
  print(string.format("%d에서 %d 사이의 숫자를 맞춰보세요.", minValue, maxValue))

  while true do
    local continuePlaying = playRound(minValue, maxValue)
    if not continuePlaying then
      print("게임을 종료합니다. 감사합니다!")
      break
    end
  end
end

main()
